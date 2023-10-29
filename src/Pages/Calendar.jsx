import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
import listPlugin from '@fullcalendar/list'
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import useColors from "../Hooks/theme";
import Header from "../Components/Header";

function Calendar() {
    const colors = useColors();
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (arg) => {
        const title = prompt("Enter a title for your event:");
        const calendarApi = arg.view.calendar;
        calendarApi.unselect(); // clear date selection

        if (title) {
            calendarApi.addEvent({
                id: `${arg.dateStr}-${title}`,
                title,
                start: arg.startStr,
                end: arg.endStr,
                allDay: arg.allDay
            });
        }
    }

    const handleEventClick = (arg) => {
        if (window.confirm(`Are you sure you want to delete the event '${arg.event.title}'`)) {
            arg.event.remove();
        }
    }

    return (
        <Box m="20px">
            <Header title="Calendar" subtitle="The calendar page which may help you set certain events to help with the security and scheduling of proper activities to help the female students in your campus" />
            <Box display="flex" justifyContent="space-between">
                {/* CALENDAR SIDEBAR */}
                <Box flex="1 1 20%" bgcolor={colors.primary[400]} p="13px" borderRadius="4px">
                    <Typography variant="h5">Events</Typography>
                    <List>
                        {currentEvents.map((event) => {
                            return (
                                <ListItem key={event.id} sx={{backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius: "2px"}}>
                                    <ListItemText primary={event.title} secondary={
                                        <Typography>{formatDate(event.start, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric"
                                        })}
                                     </Typography>
                                     }/>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
                {/* CALENDAR */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar height="75vh" plugins={[dayGridPlugin, timeGridPlugin, multiMonthPlugin, interactionPlugin, listPlugin]} headerToolbar={{
                        left: 'prev,next,today', center: 'title', right: 'multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay,listMonth'}}
                        initialView="dayGridMonth" editable={true} selectable={true} selectMirror={true}
                        dayMaxEvents={true} initialEvents={[
                            {id: "1", title: "Workshop for CSE girls", date: "2023-11-07"},
                            {id: "7", title: "DC Meeting", date: "2023-11-10"},
                        ]} select={handleDateClick}
                        eventClick={handleEventClick} eventsSet={(events) => setCurrentEvents(events)}
                        />
                </Box>
            </Box>
        </Box>
    )
}

export default Calendar