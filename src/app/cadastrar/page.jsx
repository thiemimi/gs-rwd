import Link from "next/link"

export default function Cadastrar(){

    return(
        <main className="CADASTRAR">
                <div className="CadastrarContent">
                    <h1>Cadastra-se</h1>
                </div>
                <div className='FormCadastrar'>
                    <form>
                        <div className="cadastrar-inputs">
                            <div className="cadastrar-input">
                                <label htmlFor="name">Nome</label>
                                <input type="text" name='nome' 
                                    placeholder="Digite seu primeiro nome"  required />
                            </div>
                            <div className="cadastrar-input">
                                <label htmlFor="cpf">CPF</label>
                                <input type="text" name='cpf' 
                                    placeholder="Digite seu cpf" required />
                            </div>
                            
                            <div className="cadastrar-input">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" placeholder="Digite seu email"  required />
                            </div>

                            <div className="cadastrar-input">
                                <label htmlFor="telefone">Telefone</label>
                                <input id="telefone" type="tel" name="telefone"  placeholder="Digite seu telefone"  required />
                            </div>
                            <div className="cadastrar-input">
                                <label htmlFor="senha">Senha</label>
                                <input id="senha" type="password" name="senha"  placeholder="Digite sua senha" required />
                            </div>
                        </div>     
                    </form>
                    <div className="Botoes">
                        <Link href={'/'}  className='botao-Cancelar'>Cancelar</Link>
                        <button type='submit' className='botao-Cadastrar'>Criar conta</button>
                    </div>
                    <div className='Logar'>
                        <p>Já possui uma conta?</p>
                        <Link href='/login'>Faça login</Link>
                    </div>
                </div>
        </main>
    )
}