import * as React from 'react';
import { useState } from 'react';
import {
  Icon,
  VStack,
  HStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react';
import { GetStaticProps, NextPage } from 'next';
import Section from 'components/skills/section';
import { AiTwotoneThunderbolt, AiOutlineCloudServer, AiFillTool, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiDesktop } from 'react-icons/bi';
import { GiSpiderWeb } from 'react-icons/gi';
import SkillCard from 'components/skills/skill-card';
import { skillsArray } from 'data/data';
import Header from 'components/shared/header';
import { MotionBox } from 'components/shared/animations/motion';
import { container, PageSlideFade } from 'components/shared/animations/page-transitions';
import PageLayout from '../components/layouts/pageLayout';
import { useLinkColor } from 'components/theme';
import { SkillProps } from 'interfaces/interface';

const tabList = [
  {
    name: 'All',
    filterName: '',
    icon: AiTwotoneThunderbolt
  },
  {
    name: 'Web developement',
    filterName: 'development',
    icon: BiDesktop
  },
  {
    name: 'CI/CD',
    filterName: 'ci',
    icon: GiSpiderWeb
  },
  {
    name: 'Devops',
    filterName: 'devops',
    icon: AiOutlineCloudServer
  },
  {
    name: 'IDE',
    filterName: 'ide',
    icon: AiFillTool
  },
  {
    name: 'Databases',
    filterName: 'database',
    icon: AiOutlineInfoCircle
  }
];

const TechStack: NextPage<SkillProps> = ({ skills }) => {
  const bgColor = useLinkColor();
  const [skillsList, setSkillsList] = useState([]);

  React.useEffect(() => {
    setSkillsList(skills);
  }, []);

  const filterSkills = (tab) => {
    if (tab.length) setSkillsList(skills.filter((skill) => skill.type === tab));
    else setSkillsList(skills);
  };

  return (
    <PageLayout title="About" keywords="rails, ruby, react, javascript, typescript">
      <PageSlideFade>
        <VStack spacing={8}>
          <Section>
          </Section>
          <Section zIndex={5}>
            <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%">
              <TabList display="flex" flexWrap="wrap">
                {tabList.map((tab, index) => (
                  <Tab
                    bg={useColorModeValue('gray.100', 'gray.800')}
                    color={useColorModeValue('gray.600', 'gray.500')}
                    _selected={{
                      color: 'white',
                      bg: bgColor
                    }}
                    mr={2}
                    mt={2}
                    onClick={() => filterSkills(tab.filterName)}
                    key={index}
                  >
                    <HStack spacing={1}>
                      <Icon as={tab.icon} />
                      <Text>{tab.name}</Text>
                    </HStack>
                  </Tab>
                ))}
              </TabList>
              <TabPanels minHeight={'45vh'}>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          image={tool.image}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          image={tool.image}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          image={tool.image}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          image={tool.image}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          image={tool.image}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          image={tool.image}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Section>
        </VStack>
      </PageSlideFade>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps<SkillProps> = () => {
  return {
    props: {
      skills: skillsArray
    }
  };
};

export default TechStack;
