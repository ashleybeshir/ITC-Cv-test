import styled from '@emotion/styled'

export const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column wrap;
    align-content: stretch;

    div{
        min-width: 260px;
    }
    .input-errors{
        color: red;
    }

    input {
        margin-top: 10px;
    }
`;