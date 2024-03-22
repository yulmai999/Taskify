import { useState } from 'react';
import Button from '../Buttons/Button';
import eye from '../../assets/images/eye.svg';
import noneEye from '../../assets/images/none-eye.svg';

export default function SignUpForm() {
  const [showEmailError, setShowEmailError] = useState<string | null>(null);
  const [showPasswordError, setShowPasswordError] = useState<string | null>(
    null
  );
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showNicknameError, setShowNicknameError] = useState<string | null>(
    null
  );
  const [showConfirmPasswordError, setShowConfirmPasswordError] = useState<
    string | null
  >(null);
  const [agree, setAgree] = useState(false);

  const EmailError = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.validity.typeMismatch) {
      setShowEmailError('이메일 형식으로 작성해주세요.');
    } else {
      setShowEmailError('');
    }
  };
  const PasswordError = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.validity.tooShort) {
      setShowPasswordError('8자 이상 작성해주세요.');
    } else {
      setShowPasswordError('');
    }
  };
  const handleEye = () => {
    setShowPassword(!showPassword);
  };
  const NicknameError = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) {
      setShowNicknameError('10자 이하로 작성해주세요.');
    } else {
      setShowNicknameError('');
    }
  };
  const confirmPasswordError = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value !== password) {
      setShowConfirmPasswordError('비밀번호가 일치하지 않습니다.');
    } else {
      setShowConfirmPasswordError('');
    }
  };

  const handleAgree = () => {
    setAgree(!agree);
  };

  return (
    <div className="flex flex-col mt-[3.8rem]">
      <label htmlFor="email" className="text-[1.6rem]">
        이메일
      </label>
      <input
        id="email"
        type="email"
        className={`basicinput w-[52rem] border ${showEmailError ? 'border-red-500' : ''}`}
        onBlur={EmailError}
      />
      {showEmailError && (
        <div className="text-red-500 text-[1.4rem]">{showEmailError}</div>
      )}
      <label htmlFor="nickname" className="text-[1.6rem] mt-[1.6rem]">
        닉네임
      </label>
      <input
        id="nickname"
        type="text"
        className={`basicinput w-[52rem] border ${showNicknameError ? 'border-red-500' : ''}`}
        placeholder="닉네임을 입력해주세요."
        onBlur={NicknameError}
      />
      {showNicknameError && (
        <div className="text-red-500 text-[1.4rem]">{showNicknameError}</div>
      )}
      <label htmlFor="password" className="text-[1.6rem] relative mt-[1.6rem]">
        비밀번호
        <button
          type="button"
          className="absolute right-[1.6rem] top-[3.5rem]"
          onClick={handleEye}
        >
          {!showPassword ? (
            <img src={eye} alt="eye" />
          ) : (
            <img src={noneEye} alt="noneEye" />
          )}
        </button>
      </label>
      <input
        id="password"
        type={showPassword ? 'text' : 'password'}
        className={`basicinput  w-[52rem] border ${showPasswordError ? 'border-red-500' : ''}`}
        onChange={e => setPassword(e.target.value)}
        onBlur={PasswordError}
        minLength={8}
        placeholder="8자 이상 입력해주세요."
      />

      {showPasswordError && (
        <div className="text-red-500 text-[1.4rem]">{showPasswordError}</div>
      )}
      <label
        htmlFor="confirmPassword"
        className="text-[1.6rem] relative mt-[1.6rem]"
      >
        비밀번호 확인
        <button
          type="button"
          className="absolute right-[1.6rem] top-[3.5rem]"
          onClick={handleEye}
        >
          {!showPassword ? (
            <img src={eye} alt="eye" />
          ) : (
            <img src={noneEye} alt="noneEye" />
          )}
        </button>
      </label>
      <input
        id="confirmPassword"
        type={showPassword ? 'text' : 'password'}
        className={`basicinput  w-[52rem] border ${showPasswordError ? 'border-red-500' : ''}`}
        onBlur={confirmPasswordError}
        placeholder="비밀번호를 한번 더 입력해주세요."
      />
      {showConfirmPasswordError && (
        <div className="text-red-500 text-[1.4rem]">
          {showConfirmPasswordError}
        </div>
      )}
      <label htmlFor="agree" className="text-[1.6rem] mt-[1.6rem]">
        <input type="checkbox" id="agree" onChange={handleAgree} />
        이용약관에 동의합니다
      </label>

      <Button
        variant="primary"
        type="button"
        customStyles="w-[52rem] h-[5rem] text-[1.8rem] rounded-[0.4rem] mb-[2rem] mt-[2rem]"
        disabled={
          !!showEmailError ||
          !!showPasswordError ||
          !!showNicknameError ||
          !!showConfirmPasswordError ||
          !agree
        }
      >
        가입하기
      </Button>
    </div>
  );
}