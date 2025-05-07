export default function isLogged(): boolean {
    const id = sessionStorage.getItem("id");
    const nome = sessionStorage.getItem("nome");
    const email = sessionStorage.getItem("email");
    console.log(id);
    console.log(nome);
    console.log(email);

    if (id!=null && nome!=null && email!=null) {
      return true;
    }
    return false;
  }