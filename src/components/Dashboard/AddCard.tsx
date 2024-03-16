import plusBtn from 'src/assets/images/plus.svg';
import Button from '../Buttons/Button';

export default function AddCard() {
  return (
    <Button
      variant="ghost"
      customStyles="mt-[2.5rem] p-[0.9rem] rounded-[0.6rem]"
    >
      <img
        src={plusBtn}
        alt="더하기 버튼"
        className="w-[2.2rem] h-[2.2rem] bg-[#F1EFFD] rounded"
      />
    </Button>
  );
}
