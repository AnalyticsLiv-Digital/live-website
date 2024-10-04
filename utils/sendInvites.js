
const { google } = require('googleapis');
const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

// Set credentials using the refresh token
oAuth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

const addAttendeeToEvent = async (email, fullName) => {
    try {
        const eventId = process.env.EVENT_ID;

        // const response = await calendar.events.list({
        //     calendarId: 'primary', // or your specific calendar ID
        //     timeMin: (new Date()).toISOString(), // Only show upcoming events
        //     maxResults: 10, // Number of events to retrieve
        //     singleEvents: true, // Expand recurring events into instances
        //     orderBy: 'startTime', // Order events by start time
        // });

        // const events = response.data.items;
        // if (events.length) {
        //     events.forEach((event) => {
        //         console.log(`Event: ${event.summary}`);
        //         console.log(`Event ID: ${event.id}`);
        //         console.log(`Start Time: ${event.start.dateTime || event.start.date}`);
        //     });
        // } else {
        //     console.log('No upcoming events found.');
        // }


        const event = await calendar.events.get({
            calendarId: 'primary',
            eventId: eventId,
        });

        if (!event.data.attendees) {
            event.data.attendees = []; // Initialize as an empty array if not defined
        }

        event.data.attendees.push({
            email: email,
            displayName: fullName,
        });

        // if (userMessage) {
        //     event.data.description = event.data.description
        //         ? `${event.data.description}\n\nCustom Message for ${fullName}: ${userMessage}`
        //         : `Custom Message for ${fullName}: ${userMessage}`;
        // }

        const updatedEvent = await calendar.events.patch({
            calendarId: 'primary',
            eventId: eventId,
            resource: { attendees: event.data.attendees },
            sendUpdates: 'all',
        });

        return updatedEvent.data;
    } catch (error) {
        console.error(`Error adding attendee: ${error.message}`);
        throw error;
    }
};

module.exports = { addAttendeeToEvent };
