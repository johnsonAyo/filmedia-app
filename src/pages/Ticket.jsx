import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import { useNavigate } from "react-router";
import { useTicketContext } from "../context/TicketContext";
import TicketCard from "../components/TicketCard";
import { Loader } from "../components";

const Ticket = () => {
  const [allTicket, setAllTicket] = useState([]);
  const [loading, setLoading] = useState(false)
  const { ticket } = useStateContext();
  const { getAllTickets, contract } = useTicketContext()

  const fetchData = async() => {
    setLoading(true)
    const data = await getAllTickets();
    console.log(data)
    setAllTicket(data)
    setLoading(false)
  }

  useEffect(() => {
   if(contract) fetchData();
  }, [])
  
  return (
   <div>
    {loading && (
      <Loader />
    )}
    {allTicket.map((tickets, i) => (
      <TicketCard content={tickets} key={i} ticket={ticket} loading={loading} />
    ))}
   </div>
  );
};

export default Ticket;
