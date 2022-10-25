import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./auth";

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    async getTasks() {
      const { data: tasks } = await supabase
        .from('task')
        .select("*")
        .order("id", { ascending: false });
        console.log(tasks)
      this.tasks = tasks;
      return this.tasks;
      
    },
    async addTask(title, description) {
      console.log(useUserStore().user.id);
      const { data, error } = await supabase.from('task').insert([
        {
          user_id: useUserStore().user.id,
          title: title,
          is_completed: false,
          description: description,
        },      
      ]);
    },

    async editTask(title, description, id) {
      const { data, error } = await supabase.from('task')
        .update({
          title: title,
          description: description,
        })
        .eq("id", id);
        console.log('THIS IS THE ERROR', error)
    },
    async deleteTask(id) {
      const { data, error } = await supabase.from('task').delete().match({
        id: id,
      });
    },
    async completedTask(id, booleanValue) {
      const { data, error } = await supabase
        .from('task')
        .update({ is_completed: booleanValue })
        .match({
          id: id,
        });
    }
  },
});