import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: white;
`;

export const Header = styled.header`
  background-color: #0a0736;
  color: white;
  padding: 1rem 0;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  &:hover {
    color: #e2e2e2;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const OutlineButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const FilledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #f4a135;
  border: none;
  color: white;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #e59425;
  }
`;

export const Breadcrumb = styled.nav`
  border-bottom: 1px solid #e2e2e2;
  padding: 0.5rem 0;
`;

export const BreadcrumbContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  gap: 0.5rem;
  font-size: 0.875rem;
`;

export const BreadcrumbLink = styled.a`
  color: #1a73e8;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: #666;
`;

export const AuthorAvatar = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #e2e2e2;
  border-radius: 50%;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

export const TableRow = styled.tr`
  background-color: ${(props) => (props.$isEven ? 'white' : '#f8f8f8')};
`;

export const TableCell = styled.td`
  border: 1px solid #e2e2e2;
  padding: 0.5rem;
`;

export const TableCellHeader = styled(TableCell)`
  font-weight: 600;
  width: 25%;
`;

export const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
`;

export const BottomButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const ApplyButton = styled.button`
  background-color: white;
  border: 1px solid #1a73e8;
  color: #1a73e8;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #f0f7ff;
  }
`;

export const CheckEligibilityButton = styled.button`
  background-color: #4052ee;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #3545d6;
  }
`;

export const WhatsAppButton = styled.button`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background-color: #25D366;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #22c15e;
  }
`;
