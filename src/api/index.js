import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
  );

// En la vista de resgistro
export const registro = async (email, password) => {
    const result = await supabase.auth.signUp({
        email: email,
        password: password
    })
    // TODO identificar el result y retornar lo que nos interesa
    console.log(response)
}

export const login = async (email, password) => {
    const response = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return response.data.user.id
}

// task: {
//     user_id: id,
//     title: "Titulo",
//     description: "Description del task",
//   })

export const newTask = async (task) => {
    const response = await supabase.from("task")
    .insert(task);
    // TODO indentificar la respuesta y retocanar lo que necesitamos p ej si se ha hecho
}

export const getTasks = async () => {
    const response = await supabase
      .from("task")
      .select("*")
      .order("id", { ascending: false });
    console.log(response)
    // TODO retornar la informacion de los task, 
  }


//task:   {
//     title: "Titulo modificado",
//     description: "Descipcion del task modificado",
//   }

 export const updateTask = async (taskId,task) => {
    const response = await supabase
      .from("task")
      .update(task)
      .eq("id", taskId)
    //   TODO identificar el resultado y retornar lo que nos interese
    console.log(response);
  };
  
export const deleteTask = async (taskId) => {
    const response = await supabase
    .from("task")
    .delete()
    .eq("id", taskId);
    console.log(response);
  }

export const logOut = async () => {
    const response = await supabase.auth.signOut()
    // TODO identificar si el resultado y rotrnar lo que nos interesa
    console.log(response)
  }