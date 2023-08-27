import styled from 'styled-components';

const Wrapper = styled.footer`
  max-width: 1280px;
  margin: 0 auto;
  border-top: 1px solid ${(props) => props.theme.color.border.lightGray};
  color: ${(props) => props.theme.color.black.middle};
  font-weight: 300;
  font-size: 14px;
  padding: 40px 0;
  line-height: 1.5;

  li {
    display: flex;
    align-items: center;
    gap: 10px;

    div:not(:last-child)::after {
      content: '|';
      opacity: 0.5;
      margin-left: 10px;
    }
  }
`;

const Footer = () => (
  <Wrapper>
    <ul>
      <li>
        <div>(주)데브메이트</div>
        <div>대표이사: 홍승진</div>
        <div>개인정보관리책임자: 홍승진</div>
      </li>
      <li>
        <div>사업자등록번호: 000-00-00000</div>
        <div>주소: 서울특별시 강남구 도산대로 00길 00</div>
      </li>
      <li>
        <div>Tel: 02-0000-0000</div>
        <div>Fax: 02-0000-0000</div>
        <div>Email: raquim47@naver.com</div>
      </li>
    </ul>
    <p>
      데브메이트는 통신판매중개자이며 모임에 대한 당사자 및 주최자가 아닙니다. 따라서 데브메이트는 등록된 모임에 대하여
      책임을 지지 않습니다.
    </p>
    <p>copyright © DEVMATE, All Rights Reserved.</p>
  </Wrapper>
);
export default Footer;
