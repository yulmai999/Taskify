import { useState } from 'react';
import AddBoxIcon from 'src/assets/images/add-box-white.svg';
import PagenationButtons from '../Buttons/PagenationButtons';
import InviteList from './Lists/InviteList';
import Button from '../Buttons/Button';

export default function InvitationSettings() {
  const [invitedUsers, setInvitedUsers] = useState<string[]>([
    'codeitA@codeit.com',
    'codeitB@codeit.com',
    'codeitC@codeit.com',
    'codeitD@codeit.com',
    'codeitE@codeit.com'
  ]); // 임시 데이터

  return (
    <section className=" pt-[2.9rem] pb-[0.4rem] bg-white rounded-[0.8rem] w-[62rem]">
      <div className="flex items-center justify-between px-[2.8rem]">
        <h1 className="text-[2.4rem] font-bold">초대 내역</h1>
        <div className="flex gap-[1.6rem]">
          <PagenationButtons />
          <Button
            variant="primary"
            customStyles="gap-[0.8rem] px-[1.6rem] py-[0.8rem] text-[1.4rem] rounded-[0.4rem]"
            prefix={
              <img
                className="w-[1.6rem] h-[1.6rem]"
                src={AddBoxIcon}
                alt="추가하기 박스 아이콘"
              />
            }
          >
            초대하기
          </Button>
        </div>
      </div>
      <div className="text-[1.6rem] pt-[2.7rem] rounded-[0.4rem]">
        <h2 className="px-[2.8rem] mb-[0.8rem] text-gray_9FA6B2">이름</h2>
        <InviteList invitedUsers={invitedUsers} />
      </div>
    </section>
  );
}