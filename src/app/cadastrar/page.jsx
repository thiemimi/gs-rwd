import Link from "next/link"

export default function Cadastrar(){

    return(
        <main className="Cadastrar">
            <div className="CadastrarContainer">
             
                <div className='CadastrarCampo'>
                    <form>
                        <div className="form-input-cadastrar">
                            <div className="input-box-cadastrar">
                                <label htmlFor="name">Nome</label>
                                <input type="text" name='nome' 
                                    placeholder="Digite seu primeiro nome"  required />
                            </div>
                            <div className="input-box-cadastrar">
                                <label htmlFor="sobrenome">Sobrenome</label>
                                <input type="text" name='sobrenome'
                                    placeholder="Digite seu sobrenome" required />
                            </div>
                            <div className="input-box-cadastrar">
                                <label htmlFor="cpf">CPF</label>
                                <input type="text" name='cpf' 
                                    placeholder="Digite seu cpf" required />
                            </div>
                            
                            <div className="input-box-cadastrar">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" name="email" placeholder="Digite seu email"  required />
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="telefone">Telefone</label>
                                <input id="telefone" type="tel" name="telefone"  placeholder="Digite seu telefone"  required />
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="login">Login</label>
                                <input id="login" type="text" name="login"  placeholder="Digite seu login"  required />
                            </div>

                            <div className="input-box-cadastrar">
                                <label htmlFor="senha">Senha</label>
                                <input id="senha" type="password" name="senha"  placeholder="Digite sua senha" required />
                            </div>
                            <Link href={'/'}  className='botao-Cancelar'>Cancelar</Link>
                            <button type='submit' className='botao-Cadastrar'>Criar conta</button>
                        </div>     
                    </form>
                    <div className='TextoBaixo'>
                        <p>Já possui uma conta?</p>
                        <Link href='/login'>Faça login</Link>
                    </div>
                </div>
                </div>
        </main>
    )
}