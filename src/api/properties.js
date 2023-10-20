import axios from "axios";

export  async function getAllProperties() {
    const response = await axios.get("https://toprealtorsdubai.com/api/listings/get_all_listings.php");
    return response.data;
}

export  async function getPropertyDetails(id) {
    const data = {
        id: id
    }
    const response = await axios.post("https://toprealtorsdubai.com/api/listings/get_property_details.php",data);
    return response.data;
}

export  async function getSimilarProperties(data) {
    const input = {
        property_type: data
    }
    const response = await axios.post("https://toprealtorsdubai.com/api/listings/get_similar_properties.php",input);
    return response.data;
}

export  async function getAllRentProperties() {
    const response = await axios.get("https://toprealtorsdubai.com/api/listings/get_all_rent_properties.php");
    return response.data;
}

export  async function getAllSaleProperties() {
    const response = await axios.get("https://toprealtorsdubai.com/api/listings/get_all_sale_properties.php");
    return response.data;
}

export  async function getAllAgents() {
    const response = await axios.get("https://toprealtorsdubai.com/api/listings/get_all_agents.php");
    return response.data;
}

export  async function getAgentDetails(agent_id) {
    const agentData = {
        agent_id: agent_id
    }
    
    const response = await axios.post("https://toprealtorsdubai.com/api/listings/get_agent_details.php",agentData);
    return response.data;
}

export  async function getAgentsAllProperties(agent_id) {
    const agentPropeties = {
        agent_id: agent_id  
    }
    
    const response = await axios.post("https://toprealtorsdubai.com/api/listings/get_agents_all_property.php",agentPropeties);
    return response.data;
}

export  async function DetailPageContactForm1(data) {

    const response = await axios.post("https://toprealtorsdubai.com/api/listings/send_email_details.php",data);
    return response;
}
export  async function submitForm(data) {

    const response = await axios.post("https://toprealtorsdubai.com/api/listings/contactform.php",data);
    return response;
}
export  async function DetailPageContactForm2(data) {

    const response = await axios.post("https://toprealtorsdubai.com/api/listings/detail_page_contact_form.php",data);
    return response;
}