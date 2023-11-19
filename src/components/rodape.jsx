import Image from "next/image"

export default function Rodape(){

    return(
        <main className="RODAPE">
            <Image src={'/logo.png'} alt='logo' width={120} height={120}/>
            <div className="Integrantes">
                <p>Ana Clara Rocha de Olivera RM: 550110</p>
                <p>Enzo Lafer Gallucci RM: 551111</p>
                <p>Kaiky Noriyuki Ishibashi RM: 98876</p>
                <p>Stephany Siqueira RM: 98258</p>
                <p>Thiemi Hiratani Favaro RM: 551478</p>
            </div>
        </main>
    )
}