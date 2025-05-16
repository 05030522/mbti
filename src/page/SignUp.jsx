import React from "react";
import { supabase } from "../supabase/client";
import googleButton from "../assets/web_light_sq_SU.svg";

const SignUp = () => {
  const handleSocialLogIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo:
          import.meta.env.MODE === "development"
            ? "http://localhost:5173/authCallback"
            : "https://mbti-platform.shop/authCallback",
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  };

  return (
    <div>
      <h1>소셜 로그인</h1>
      <h3>간편하게 로그인해보세요</h3>
      <div>
        <img
          onClick={handleSocialLogIn}
          style={{
            cursor: "pointer",
            display: "block",
            width: "10rem",
            margin: "0 auto",
          }}
          src={googleButton}
          alt={"google login"}
        />
      </div>
    </div>
  );
};

// https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?access_type=offline&client_id=686848064285-bn6pm26akqr0fkfaknioenhglmjghbqe.apps.googleusercontent.com&prompt=consent&redirect_to=http%3A%2F%2Flocalhost%3A5173%2FauthCallback&redirect_uri=https%3A%2F%2Fbnjgbmhwbyctnsdcaesu.supabase.co%2Fauth%2Fv1%2Fcallback&response_type=code&scope=email%20profile&state=eyJhbGciOiJIUzI1NiIsImtpZCI6IkJOb01QaExrWU9jL1JxeUYiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE3NDA0ODU0MTIsInNpdGVfdXJsIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAiLCJmdW5jdGlvbl9ob29rcyI6bnVsbCwicHJvdmlkZXIiOiJnb29nbGUiLCJyZWZlcnJlciI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTE3My9hdXRoQ2FsbGJhY2siLCJmbG93X3N0YXRlX2lkIjoiIn0.frN6vwSJhTeMINdrFUyQO2qSgoqWtGyVOTiyoAtneuo&service=lso&o2v=2&ddm=1&flowName=GeneralOAuthFlow

export default SignUp;
