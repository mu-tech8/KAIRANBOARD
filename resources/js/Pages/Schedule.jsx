import "@fullcalendar/react/dist/vdom";
// import "@fullcalendar/core/vdom"; // for Vite
// import { Calendar } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React from "react";

export default function Schedule() {
    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
            />
        </div>
    );
}
