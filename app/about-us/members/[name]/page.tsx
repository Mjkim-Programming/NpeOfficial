import React from "react";

const memberList = ['kmj'];

export const metadata = {
    title: "Members",
}

function MemberKmj() {
    return(
        <div>
            백엔드 개발자를 꿈꾸는 학생입니다.
        </div>
    )
}

function Detail(props) {
    return(
        <div>
            구성원 이름 : {props.name}
            {props.name == "kmj" ? <MemberKmj></MemberKmj> : <></>}
        </div>
    )
}

function NoMemberFound() {
    return(
        <div>
            아무도 없네요! 혹시 이름이 오르길 원하시면 신청해보시는 건 어떨까요?
        </div>
    )
}

export default function MembersDetail({params: {name }}: {params:{name: string};}){
    return(
        <div>
            {memberList.indexOf(name) > -1 ? <Detail name={name}/> : <NoMemberFound />}
        </div>
    )
}