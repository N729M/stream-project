import { useCallback, useState } from 'react';
import axios from 'axios';
import Input from "@/components/Input";
import { signIn } from 'next-auth/react';

import { FcGoogle } from 'react-icons/Fc';
import { FaGithub } from 'react-icons/Fa';
import { FaMonero } from 'react-icons/Fa';
import { FaMagento } from 'react-icons/Fa';
import { FaMastodon } from 'react-icons/Fa';


const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [variant,setVariant] = useState('login');
    const toggleVariant = useCallback(() =>{
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const login = useCallback(async () =>{
        try{
            await signIn('credentials', {
                email,
                password, 
                callbackUrl: '/profiles'
            });

        } catch(error){
                console.log(error)
            }
        }, [email, password])



    const register = useCallback(async () =>{
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            });

            login();
            } catch(error) {
                console.log(error)
            }
        }, [email, name, password, login]);



    return (
      <div className="relative h-full w-full bg-[url('/images/heroIcons.png')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-80">
            <nav className="px-12 py-5">
                <img className="h-16 pagelogo" src="/images/conspix/cplx6.png" alt= "conspixlogo"/>
            </nav>

            <div className="flex justify-center">
                <div className = "bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    <h2 className="text-white text-4xl mb-8 font-semibold">
                        {variant === 'login' ? 'Sign in' : 'Create an account'}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {variant === 'register' && (
                            <Input 
                            label="Username"
                            onChange={(ev)=>{ setName(ev.target.value) } }
                            id="name"
                            value={name}
                            />
                        )}
                        
                        <Input 
                        label="Email"
                        onChange={(ev)=>{ setEmail(ev.target.value) } }
                        id="email"
                        type="email"
                        value={email}
                        />
                        <Input 
                        label="Password"
                        onChange={(ev)=>{ setPassword(ev.target.value) } }
                        id="password"
                        type="password"
                        value={password}
                        />
                    </div>

                    <button onClick={variant === 'login' ? login : register} className="bg-red-400 py-3 text-white rounded-md w-full mt-10 hover:bg-red-400 transition">
                            {variant === 'login'? 'Sign in' : 'Sign up'}
                    </button>

                    <div className="flex flex-row itemms-center gap-4 mt-8 justify-center">

                        <div className="w-10 h-10 bg-white rounded-full flex itmes-center justify-center cursor-pointer hover:opacity-80 transition pt-1"
                        onClick={() => signIn('github', { callbackUrl: '/profiles'})}
                        >
                            <FaGithub size={30} />
                        </div>

                        <div className="w-10 h-10 bg-white rounded-full flex itmes-center justify-center cursor-pointer hover:opacity-80 transition pt-1">
                            <FaMonero size={30} />
                        </div>

                        <div className="w-10 h-10 bg-white rounded-full flex itmes-center justify-center cursor-pointer hover:opacity-80 transition pt-1">
                            <FcGoogle size={30} />
                        </div>

                        <div className="w-10 h-10 bg-white rounded-full flex itmes-center justify-center cursor-pointer hover:opacity-80 transition pt-1">
                            <FaMastodon size={30} />
                         </div>

                        <div className="w-10 h-10 bg-white rounded-full flex itmes-center justify-center cursor-pointer hover:opacity-80 transition pt-1">
                            <FaMagento size={30} />
                        </div>

                    </div>

                    <p className="text-neutral-500 mt-12">
                        {variant ==='login' ? 'First time using Conspix ?' : 'Already have an account?'}
                        <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                        {variant === 'login'? 'Create an account' : 'Sign in ! '}
                        </span>
                    </p>
                </div>
            </div>
        </div>
      </div>
    );
  }




export default Auth;
