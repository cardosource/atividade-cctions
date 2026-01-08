function nome_user(nome){
	return function(user_id){
		return function exception(aviso){
			return function sucesso(mensagem){
                           if(nome === '' || nome.length <3){
                                 return aviso
			   }else{
				   return {status: mensagem, id : user_id, user: nome}
			   }
			}
			
		}
		
	}

}


function validacao(functionVAL,msg){
	try{
	   return functionVAL(msg)
	}catch(e){
         return {erro:e}
	}
}


const user_login = nome_user("mel")(111)
const user_validacao = validacao(user_login,"cadastro não segui os requerimentos minimos")
const user_sucesso = user_validacao("Usuário registrado")
console.log(user_sucesso)
