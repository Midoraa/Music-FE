import { IRegisterPageProps, IRegisterPage } from '@interfaces/pages/register';
import { images } from '@utils/constants';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Country {
    countryName: string;
}
const RegisterPage: IRegisterPage<IRegisterPageProps> = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>('');

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

    // @ts-ignore
    return (
        <div className="pages__register">
            <div className="wrap-login100 position-relative">
                <div className="position-absolute back">
                    <a href="/">
                        <img src={images.ICON_LEFT_ARROW} alt="Logo" />
                    </a>
                </div>
                <form action="" className="login100-form validate-form mb-4">
                    <div className="d-flex justify-content-center">
                        <img src={images.MAIN_LOGO} alt="Logo" className="logo" />
                    </div>
                    <div className="login100-form-title py-3">Register</div>

                    <div className="d-flex">
                        <div className="wrap-input100 validate-input" data-validate="Enter Name">
                            <input className="input100" type="text" name="name" placeholder="Name" autoComplete="off" />
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
                                    <option key={index} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="wrap-input100 validate-input" data-validate="Enter username">
                        <input className="input100" type="text" name="username" placeholder="Username" autoComplete="off" />
                        <span className="focus-input100" data-placeholder=""></span>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Enter username">
                        <input className="input100" type="text" name="password" placeholder="Password" />
                        <span className="focus-input100" data-placeholder=""></span>
                    </div>

                    <div className="container-login100-form-btn">
                        <button>ENTER</button>
                    </div>
                </form>
                <div className="text-center register">
                    <p>
                        <a className="link" href="/login">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
