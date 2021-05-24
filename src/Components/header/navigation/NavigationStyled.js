import styled from 'styled-components'

export const NavigationContainer = styled.nav`
    .list {
    display: flex;
    align-items: center;
    margin-right: -30px;
    list-style: none;
  }

  .listItem {
    margin-right: 30px;
  }

  .link {
    text-decoration: none;
    text-transform: uppercase;
    color: salmon;
  }

.activeLink{
    color: green;
}
`
