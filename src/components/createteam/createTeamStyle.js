import styled from 'styled-components';
import { BoxCard } from '../../MainStyle';
export const Box = styled(BoxCard)`
  box-sizing: border-box;

  header {
    color: #552c8a;
    font-size: 1.375rem;
    font-weight: 700;
    margin: 1rem 0 1.5rem;
  }

  hr {
    margin: 0 -2rem;
    border: 0;
    height: 1px;
    background: #eeeeee;
  }
`;

export const FormGrid = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 35% 35%;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
    gap: 32px;
  }
`;

export const FormHeader = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 700;
  color: #8d8d8d;
  text-transform: uppercase;
  margin-top: 1.6875rem;
  margin-bottom: 2.8125rem;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  &:focus-within label {
    color: #c00e4f;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    transition: 0.3s color;
    ${(props) => props.error && `color: #c00e4f;`};
  }
  input,
  textarea {
    padding: 6px 10px;
    width: 100%;
    font-size: 12px;
    transition-origin: border;
    transition-duration: 0.3s;
    border: 1px solid ${(props) => (props.error ? `#c00e4f` : 'gr')};
  }

  input:focus,
  textarea:focus {
    outline: 0;
    border: 1px solid #c00e4f;
  }
`;
export const PlayerColumn = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  padding: 18px 20px;
  background: linear-gradient(0deg, #e5e5e5 0%, #fefefe 100%);
  opacity: ${(props) => (props.disabled ? '0.3' : '1')};
  border: 2px #e0e0e0 dashed;
  border-radius: 5px;
  font-weight: 700;

  span {
    color: #c50341;
    font-weight: 400;
  }
`;
export const PlayerRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FormFieldSet = styled.div`
  label {
    width: 100%;
    flex-grow: 1;
    position: relative;
    color: #cccccc;
  }
  label:before {
    /*styles outer circle*/
    content: ' ';
    display: inline-block;
    position: relative;
    top: 3px;
    margin: 0 5px 0 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #8e8e8e;
    background-color: transparent;
  }

  input[type='radio'] {
    /* hides default check */
    display: none;
    &:checked ~ label {
      color: #c50844;
    }
    &:checked ~ label:before {
      border: 1px solid #e2cee1;
    }
    &:checked ~ label > span {
      /*styles checked inside circle*/
      border-radius: 11px;
      width: 11px;
      height: 11px;
      position: absolute;
      top: 6px;
      left: 3px;
      display: block;
      background: linear-gradient(
        90deg,
        rgba(192, 14, 79, 1) 0%,
        rgba(139, 32, 111, 1) 100%
      );
    }
  }

  display: flex;
  div {
    display: flex;
    width: 100%;
  }
`;

export const TagInput = styled.div`
  background: white;
  border: 1px solid #d6d6d6;
  border-radius: 2px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px 0;

  input:focus {
    border: none;
    outline: 0;
  }
  input {
    border: none;
    width: 100%;
  }
  ul {
    display: inline-flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  li {
    align-items: center;
    background: #c50341;
    border-radius: 15px;
    color: white;
    display: flex;
    font-weight: 300;
    list-style: none;
    margin-bottom: 5px;
    margin-right: 5px;
    padding: 5px 10px;
  }
  li > button {
    align-items: center;
    appearance: none;
    background: #c50341;
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: inline-flex;
    font-size: 12px;
    height: 15px;
    justify-content: center;
    line-height: 0;
    margin-left: 8px;
    padding: 0;
    transform: rotate(45deg);
    width: 15px;
  }
  li:last-child {
    background: none;
    flex-grow: 1;
    padding: 0;
  }
`;
export const PageButton = styled.button`
  border: 1px solid #8a002c;
  align-items: center;
  background: #c50341;
  border-radius: 7px;
  color: white;
  font-weight: 300;
  padding: 5px 10px;
  outline: 0;
  &:active {
    border: 1px solid #c50341;
    background: #8a002c;
  }
  &:disabled {
    background: #5c001d;
    color: #c50341;
    visibility: hidden;
  }
`;
export const FormationColumn = styled.div`
  display: flex;
  font-weight: 700;
  width: 100%;
  align-items: center;
  position: relative;
  label {
    font-size: 13px;
  }
  select:focus {
    outline: 0;
  }

  select:focus + span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0%;
    border: 2px solid #c50341;
    border-radius: inherit;
  }
  select {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.25em;
    padding: 6px 17px;
    appearance: none;
    background-color: transparent;
    border: none;
    cursor: inherit;
    grid-area: select;
  }
  div {
    width: 100%;
    max-width: 31%;
    margin-left: 35px;
    border: 1px solid #777;
    border-radius: 0.25em;
    padding: 0 10px 0 0px;
    cursor: pointer;
    background-color: #fff;
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
    display: grid;
    grid-template-areas: 'select';
    align-items: center;
  }
  div::after {
    content: '';
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: #777;
    clip-path: polygon(10% 0, 50% 80%, 90% 0, 100% 0, 50% 100%, 0 0);
    grid-area: select;
    justify-self: end;
  }
`;

export const PitchDiv = styled.div`
  background: rgb(192, 14, 79);
  background: linear-gradient(310deg, #82307f 0%, #b03b7c 100%);
  position: relative;
  margin-top: 2rem;
  height: 673px;
  overflow: hidden;
  width: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const SaveButton = styled.button`
  border: 1px solid #8a002c;
  border-radius: 3px;
  margin-top: 30px;
  padding: 16px;
  color: white;
  background: rgb(192, 14, 79);
  background: linear-gradient(180deg, #b03b7c 0%, #82307f 100%);
  box-shadow: 0 12px 10px 0 rgb(0 0 0 / 20%);
`;
