import apple from '../../../assets/images/apple-icon.svg'
import google from '../../../assets/images/google-icon.svg'
import facebook from '../../../assets/images/facebook-icon.svg'

const FormsIcons = () => {
    return (
        <div>
            <p className="my-4 lg:my-6">Or</p>
            <div className="flex gap-2 lg:gap-4">
                <a href="https://link.apple.com/account/create/form">
                    <img src={apple} alt="Apple icon" />
                </a>
                <a href="https://www.google.com/">
                    <img src={google} alt="Google icon" />
                </a>
                <a href="https://www.facebook.com/">
                    <img src={facebook} alt="Facebook icon" />
                </a>
            </div>
        </div>
    )
}

export default FormsIcons