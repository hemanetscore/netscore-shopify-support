
import { Heading, Page,List,Icon,Select,Stack,RadioButton,DataTable, TextContainer,DisplayText,ButtonGroup,Button,Card,IndexTable,Checkbox, Layout,SettingToggle,Form,FormLayout,TextField } from "@shopify/polaris";
import {
  PackageMajor,MobileMajor,EmailMajor
} from '@shopify/polaris-icons';
const customers = [];
const allResourcesSelected=[];
const handleSelectionChange=[];
const emptyStateMarkup=[];
const rowMarkup=[];
  const resourceName = {
    singular: 'customer',
    plural: 'customers',
  };


  // const handleChange = useCallback(() =>{conosle.log('checked')});

 
const Index = () => (

  <Page>
<Layout>
 <Layout.Section sectioned oneThird>
      <Card className='statusCard' sectioned>
      <TextContainer sectioned>
     <Heading>
       Status
     </Heading>
     <label className="switch">
   <p>Enabled</p>  
  <input id='theStatus' onChange={()=>{if(document.getElementById('theStatus').checked==true){console.log('Enable');localStorage.setItem("netscore_app_status", "Enable");}else{console.log('Disabled');localStorage.setItem("netscore_app_status", "Disabled")}}} type="checkbox"/>
  <span className="slider round"></span>
</label>
      </TextContainer>
      </Card>
  </Layout.Section>
  <Layout.Section sectioned oneThird>
 <Card sectioned>
 <TextContainer sectioned>
     <Heading>
       Contact us
     </Heading>
  <Stack sectioned horizontal>
  <Icon
  source={EmailMajor}
  color="base" /><p>support@netscore.com</p> 
  </Stack>
  <Stack sectioned horizontal>
  <Icon
  source={MobileMajor}
  color="base" /><p>+91 99999 99999</p> 
  </Stack>
 

</TextContainer>
</Card>

  </Layout.Section>
  <Layout.Section sectioned oneSecond>
 <Card sectioned>
 <TextContainer sectioned>
     <Heading>
       Contact us
     </Heading>
 
  <div class="container">
  <form>

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="issue">Issue</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

    <label for="subject">Please explain us more</label>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

    <button class="submitButton">SUBMIT</button>

  </form>
</div>
  
  
 

</TextContainer>
</Card>

  </Layout.Section>
</Layout>


  </Page>

);

export default Index;
