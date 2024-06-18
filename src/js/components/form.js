import button from "./button.js"
import input from "./input.js"

const form = function(data){
    // destructuration de l'objet data puis de l'objet inputs
    // const inputs = data.inputs
    const { email, password } =  data.inputs 
    // cela revient au même que 
    // const email = data.inputs["email"] ou data.inputs.email
    // const password = data.inputs["password"] ou data.inputs.password
    const { submit, reset } = data.buttons

    return(`

            <form id="${data.formId}"> 
                <section>
                    ${input(email.id, email.placeholder, email.type)}
                    ${input(password.id, password.placeholder, password.type)}
                </section>
                <section>
                    ${button(submit.content, submit.id, submit.type)}
                    ${button(reset.content, reset.id, reset.type)}
                </section>
            
            </form>

    `)
}

export default form