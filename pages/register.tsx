import { IRegisterPageProps,  IRegisterPage} from '@interfaces/pages/register';
import { images } from '@utils/constants';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';


interface Country{
    countryName: string
}
const RegisterPage: IRegisterPage<IRegisterPageProps> = () => {

    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://api.first.org/data/v1/countries');
                const countriesData = response.data.data;
                const countryList = Object.values(countriesData).map((country: any) => country.country);
                setCountries(countryList);
            } catch (error) {
                console.error('Failed to retrieve data', error);
            }
        };

        fetchCountries();
    }, []);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3010/users/register', {
                name,
                username,
                password,
                country: selectedCountry
            });
            if (response.status === 201) {
                router.push('/login');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Register successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Register fail",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log('Registration failed');
            }
        } catch (error) {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Register fail",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    // @ts-ignore
    return (
        <div className="pages__register">
            <div className="wrap-login100 position-relative">
                <div className="position-absolute back">
                    <a href="/">
                        <img src={images.ICON_LEFT_ARROW} alt="Logo" />
                    </a>
                </div>
                <form onSubmit={handleSubmit} className="login100-form validate-form mb-4">
                    <div className="d-flex justify-content-center">
                        <img src={images.MAIN_LOGO} alt="Logo" className="logo" />
                    </div>
                    <div className="login100-form-title py-3">Register</div>

                    <div className="d-flex">
                        <div className="wrap-input100 validate-input" data-validate="Enter Name">
                            <input className="input100"
                                type="text"
                                name="name"
                                placeholder="Name"
                                autoComplete="off"
                                value={name}
                                onChange={(e) => setName(e.target.value)}/>
                            <span className="focus-input100" data-placeholder=""></span>
                        </div>
                        <div className="list-country" data-validate="Enter country">
                            <select
                                className="select"
                                name="country"
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                            >
                                <option value="">Country</option>
                                {countries.map((country, index) => (
                                    <option key={index} value={country.toString()}>{country}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Enter username">
                        <input className="input100"
                               type="text"
                               name="username"
                               placeholder="Username"
                               autoComplete="off"
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                        <span className="focus-input100" data-placeholder=""></span>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Enter username">
                        <input className="input100"
                               type="password"
                               name="password"
                               placeholder="Password"
                               autoComplete="off"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                        <span className="focus-input100" data-placeholder=""></span>
                    </div>

                    <div className="container-login100-form-btn">
                        <button>ENTER</button>
                    </div>
                </form>
                <div className="text-center register">
                    <p><a className="link" href="/login">Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
