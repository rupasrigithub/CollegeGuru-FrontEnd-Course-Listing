import React from 'react';
import {
  PageContainer,
  Header,
  HeaderContent,
  Title,
  NavContainer,
  NavButtons,
  NavButton,
  ActionButtons,
  OutlineButton,
  FilledButton,
  Breadcrumb,
  BreadcrumbContent,
  BreadcrumbLink,
  MainContent,
  AuthorInfo,
  AuthorAvatar,
  Section,
  SectionTitle,
  Table,
  TableRow,
  TableCell,
  TableCellHeader,
  List,
  BottomButtons,
  ApplyButton,
  CheckEligibilityButton,
  WhatsAppButton,
} from './styles';
import { Heart, Phone, HelpCircle, MessageCircle } from 'lucide-react';
import { courseHighlights, authorInfo } from './constants';

const BiochemicalEngineering = () => {
  return (
    <PageContainer>
      <Header>
        <HeaderContent>
          <Title>B Tech Biochemical Engineering</Title>
          <NavContainer>
            <NavButtons>
              <NavButton><Heart size={16} /> Save</NavButton>
              <NavButton><Phone size={16} /> Request a callback</NavButton>
              <NavButton><HelpCircle size={16} /> Ask us</NavButton>
            </NavButtons>
            <ActionButtons>
              <OutlineButton>Try Our College Finder</OutlineButton>
              <FilledButton>Check Eligibility</FilledButton>
            </ActionButtons>
          </NavContainer>
        </HeaderContent>
      </Header>

      <Breadcrumb>
        <BreadcrumbContent>
          <BreadcrumbLink href="/">Overview</BreadcrumbLink>
          <span>{'>'}</span>
          <span>B.Tech - Biochemical Engineering Colleges</span>
        </BreadcrumbContent>
      </Breadcrumb>

      <MainContent>
        <AuthorInfo>
          <AuthorAvatar />
          <div>
            <div>Written By <strong>{authorInfo.name}</strong></div>
            <div>{authorInfo.date}</div>
          </div>
        </AuthorInfo>

        <Section>
  <SectionTitle>About B.Tech - Biochemical Engineering</SectionTitle>
  <p>
    B.Tech in Biochemical Engineering is a program that covers various subjects related to the chemical processes, 
    production, and development of biochemical products. This branch of engineering integrates aspects of biology, 
    technology, and engineering to conduct groundbreaking research aimed at enhancing the quality of human life.
  </p>
  <p>
    Biochemical engineers focus on developing natural and artificial substances, often working on processes like oil refining, 
    ecological development, environmental conservation, and the creation of pharmaceuticals. The course encompasses the study 
    of various technologies and methodologies that can improve the quality of healthcare, diagnostic processes, food 
    production, and medicine manufacturing.
  </p>
  <p>
    After completing this course, graduates typically find roles assisting chemists and biologists. Many choose to delve 
    deeper into research, often pursuing higher studies such as a master's degree or a Ph.D. in this specialized field.
  </p>
</Section>


        <Section>
          <SectionTitle>B.Tech Biochemical Engineering Course Highlights</SectionTitle>
          <Table>
            <tbody>
              {courseHighlights.map((row, index) => (
                <TableRow key={index} $isEven={index % 2 === 0}>
                  <TableCellHeader>{row.label}</TableCellHeader>
                  <TableCell>
                    {Array.isArray(row.value) ? (
                      <List>
                        {row.value.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </List>
                    ) : (
                      row.value
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>

          <BottomButtons>
            <ApplyButton>Apply Now</ApplyButton>
            <CheckEligibilityButton>Check Eligibility</CheckEligibilityButton>
          </BottomButtons>
        </Section>
      </MainContent>

      <WhatsAppButton>
        <MessageCircle size={24} />
      </WhatsAppButton>
    </PageContainer>
  );
};

export default BiochemicalEngineering;
