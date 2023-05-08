import Styles from "./styles.module.css";
import { MemberView } from "./Member";
import type { Member } from "@/components/Members/types";

interface MembersProps {
  memberGroups: Array<Array<Member>>;
}

export const Members = ({ memberGroups }: MembersProps) => {
  return (
    <>
      {memberGroups.map((m, i) => (
        <div className={Styles.mosaic} key={i}>
          <div className="container">
            <div className="row" key={i}>
              {m.map((member) => (
                <div className="col-md-4 mb-3" key={member.name}>
                  <MemberView
                    name={member.name}
                    img={member.img}
                    text={member.text}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
