"use client";
import Image from "next/image";
import styles from "./login.module.css";
export default function Login() {
  return (
    <div className={styles.loginContainer}>
      {/* Shadow */}
      <div className="absolute top-0 left-0 w-[707px] h-[151.33px] rounded-[2362.18px] blur-[709.36px]" style={{background: "linear-gradient(90deg, #2DCA04 0%, #C1B816 45.67%, #D2205E 92.79%)"}} />
      {/* Logo */}
      <div className="flex items-center z-10 mb-[40px]">
        <span className="font-inter font-semibold text-[77.91px] leading-[62.33px] text-[#9B87F6]">Dine</span>
        <span className="font-inter font-semibold text-[77.91px] leading-[62.33px] text-[#EF7013]">Well</span>
      </div>
     
     <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-[32px] leading-[10px] font-inter font-bold">Welcome Back</h1>
      <h2 className="text-[12px] leading-[10px] font-inter font-normal italic text-[#828DA9]">Sign In to Access your Workplace</h2>
     </div>
        {/* Form Fields */}
        <form className="flex flex-col  w-[400px]">
        
          <div className="h-[20px] w-full"/>
          {/* Email Field */}
          <div
            className="flex items-center w-full  mb-4 relative"
            style={{
              background: "#fff",
              borderRadius: 999,
              boxShadow: "2px 2px 20px -3px rgba(0,0,0,0.08)",
              gap: 8,
              height: 44,
              border: 'none',
            }}
          >
            <input
              type="Email"
              placeholder="Email here"
              className="flex-1 bg-transparent outline-none font-mulish text-[12px] font-normal leading-[9.6px] tracking-[-0.4%] text-[#828DA9] placeholder-[#828DA9] h-full"
              style={{fontFamily: 'Mulish', fontWeight: 400, fontSize: 12, lineHeight: '0.8em', letterSpacing: '-0.4%', height: '100%', border: 'none', margin:16}}
              required
            />
         
          </div>
          <div className="h-[20px] w-full"/>
          {/* Password Field */}
          <div
            className="flex items-center w-full  mb-4 relative"
            style={{
              background: "#fff",
              borderRadius: 999,
              boxShadow: "2px 2px 20px -3px rgba(0,0,0,0.08)",
              gap: 8,
              height: 44,
              border: 'none',
            }}
          >
            <input
              type="password"
              placeholder="Password here"
              className="flex-1 bg-transparent outline-none font-mulish text-[12px] font-normal leading-[9.6px] tracking-[-0.4%] text-[#828DA9] placeholder-[#828DA9] h-full"
              style={{fontFamily: 'Mulish', fontWeight: 400, fontSize: 12, lineHeight: '0.8em', letterSpacing: '-0.4%', height: '100%', border: 'none', margin:16}}
              required
            />
         
          </div>
          <div className="h-[20px] w-full"/>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full font-maven font-bold text-[16px] leading-[12.8px] tracking-[-0.4%] text-center mt-4 cursor-pointer"
            style={{
              height: 44,
              background: '#D52B1E',
              border: '1px solid',
              borderImage: 'linear-gradient(90deg, #C4CBF2 0%, #DCC2FF 44%, #E1DAF4 71%, #D2D3F3 100%) 1',
              borderRadius: 999,
              boxShadow: '2px 2px 50px 0px rgba(0,0,0,0.15)',
              color: '#fff',
              padding: 10,
            }}
          >
            Login
          </button>
          <div className="h-[20px] w-full"/>
            {/* Forgot Password */}
        <div className="flex justify-center mt-4">
          <span className="font-redhat text-[12px] leading-[12px] text-[#828DA9] cursor-pointer underline italic">Forgot Password?</span>
        </div>
        </form>
      
      </div>
  );
} 