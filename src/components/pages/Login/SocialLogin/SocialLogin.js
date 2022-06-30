import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import google from '../../../../images/google icon.png';

import Loading from '../../Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (error) {
       errorElement=
       <div>
        <p className='text-danger'>Error:{error.message}</p>
       </div>
      }
      if (loading) {
        return <Loading></Loading>
      }
      if(user){
        if (user) {
          navigate(from, { replace: true });
        }
      }
    return (
        <div className='mb-5'>
           
            <div className="d-flex align-items-center justify-content-center">
                <div style={{height:'1px'}} className="bg-primary w-50"></div>
                <p className="mt-2 px-2">or</p>
                <div style={{height:'1px'}} className="bg-primary w-50 "></div>
            </div>
            {errorElement}
            <button className="btn btn-primary w-50 " onClick={()=>signInWithGoogle()}>
                <img style={{width:"24px"}} src={google}className='mx-2' alt="" />
                Google sign in</button>
        </div>
    );
};

export default SocialLogin;