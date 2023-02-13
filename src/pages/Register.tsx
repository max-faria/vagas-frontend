import { Button } from '../components/Button';
import extendedLogoImg from '../assets/imgs/logotipo-icone-extendida.svg';
import { RegisterCard } from '../components/RegisterCard';

import '../App.css'

const Register = () => {
    return (
        <main className="grid lg:grid-cols-2 px-4 bg-hero-pattern bg-cover bg-no-repeat z-50 h-screen d-flex">
                <section className="lg:pl-16 pl-24 mt-44">
                    <img
                        className="w-[450px]"
                        src={extendedLogoImg}
                          alt="Logo-sou-junior-square"
                    />
                    <h1 className="text-white text-[78px] leading-[94px] my-8">
                        Onde o Júnior
                        <br /> tem vez!
                    </h1>
                    <Button
                        background="outline"
                        border="white"
                        className="w-[283px] h-[67px] text-2xl"
                        style={{ position: 'absolute' }}
                        onClick={()=> window.open('https://www.soujunior.tech', '_blank')}
                    >
                            Saiba mais
    
                    </Button>
                </section>

                <section className="flex justify-center items-center">
                    <div>
                        <RegisterCard />
                    </div>
                </section>
            </main>
    );
};

export default Register;