import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.color};
  font-family: ${FontFamilies.PRIMARY};
  text-transform: uppercase;
  background: none;
  border: 2px solid white;
  border-radius: ${BorderRadiuses.ONE};
  padding: ${Spaces.ONE} ${Spaces.THREE};
`;

export default function Button(props) {
    return (
        <Button color={props.color}>
            {props.text}
        </Button>
    )
}