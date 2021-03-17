import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: block;
  padding: ${({ theme }) => theme.paddings.xxl};
  background-color: ${({ theme }) => theme.palette.white.main};
  border-radius: 5px;
  margin: ${({ theme }) => theme.margins.xxxl} 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.margins.lg};
`

export const StyledTitlePrimaryColor = styled.span`
  color: ${({ theme }) => theme.palette.green.main};
`

export const StyledDescription = styled.h5`
  color: ${({ theme }) => theme.palette.grey[5]};
  margin-bottom: 3rem;
`
