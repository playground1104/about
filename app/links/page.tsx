import { FaGithub } from "react-icons/fa";

import ExternalLink from "@/components/ExternalLink";

const Links = () => {
  return (
    <div>
      <h2>링크 모음</h2>
      {/* test purpose, will be replaced later */}
      <ExternalLink url="https://github.com/eunwoo1104" icon={<FaGithub />}>
        GitHub
      </ExternalLink>
      <p>
        이 글은 장문 속{" "}
        <ExternalLink url="https://eunwoo.dev/" linkType="paragraph">
          링크
        </ExternalLink>
        를 테스트하기 위한 목적입니다.
      </p>
    </div>
  );
};

export default Links;
