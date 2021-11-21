import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authUser } from '../_actions/user_action';

// null  => 아무나 출입 가능한 페이지
// true  => 로그인한 유저만 출입 가능한 페이지
// false => 로그인한 유저는 출입 불가능한 페이지

export default function auth(SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(authUser()).then((res) => {
        console.log(res);

        // 로그인 하지 않은 상태
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push('/login');
          }
        } else {
          // 로그인 한 상태
          if (adminRoute && !res.payload.isAdmin) {
            props.history.push('/');
          } else {
            if (!option) {
              props.history.push('/');
            }
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
