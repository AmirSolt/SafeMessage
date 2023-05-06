import {z} from "zod";
import {contactMethods, currencies, platforms, themeTemplates} from "./utils";




const handleNameMax = 20;
const displayNameMax = 20;
const bioDescMax = 100;
const messageTitleMax = 20;
const messageSubjectMax = 50;
const messageBodyMax = 100;



export const Bio = z.object({
    pfp: z.string().url(),
    handleName: z.string().max(handleNameMax),
    displayName: z.string().max(displayNameMax),
    desc: z.string().max(bioDescMax),
});

export const Contact = z.object({
    email: z.string().email(),
    phone: z.string().regex(/^[0-9]*$/, {message: "Phone number must only contain numbers"}),
    primaryMethod: z.string().refine( (val) => val in contactMethods, {message: "Invalid contact method"}),
});

export const MessageSettings = z.object({
    title: z.string().max(messageTitleMax),
    price: z.number().min(0, {message: "Price must be greater than 0"}),
    currency: z.string().refine( (val) => val in Object.keys(currencies), {message: "Invalid currency"})
});




export const Message = z.object({
    sender: z.string().email(),
    subject: z.string().max(messageSubjectMax),
    body: z.string().max(messageBodyMax),
    date: z.date(),
    price: z.number().min(0, {message: "Price must be greater than 0"}),
    currency: z.string().refine( (val) => val in Object.keys(currencies), {message: "Invalid currency"}),
    isRead: z.boolean(),
    isPaid: z.boolean(),
});

export const PublicPageStats = z.object({
    views: z.number(),
    numberOfMessageAttempts: z.number(),
    numberOfFreeMessages: z.number(),
    numberOfPaidMessages: z.number(),
    referrers: z.array(z.string().url()),
    OSPlatforms: z.array(z.string().refine( (val) => val in platforms, {message: "Invalid platform"})),
    locations: z.array(z.string()),
});

export const Theme = z.object({
    isCustom: z.boolean(),
    template: z.string().refine( (val) => val in themeTemplates, {message: "Invalid template"}),
});