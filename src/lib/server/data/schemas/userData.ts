import {z} from "zod";
import {contactMethods, currencies, platforms, themeTemplates} from "./utils";




const userNameMax = 20;
const bioDescMax = 100;
const messageTitleMax = 20;
const messageSubjectMax = 50;
const messageBodyMax = 100;



const Bio = z.object({
    pfp: z.string().url(),
    userName: z.string().max(userNameMax),
    desc: z.string().max(bioDescMax),
});
export type Bio = z.infer<typeof Bio>

const Contact = z.object({
    email: z.string().email(),
    phone: z.string().regex(/^[0-9]*$/, {message: "Phone number must only contain numbers"}),
    primaryMethod: z.string().refine( (val) => val in contactMethods, {message: "Invalid contact method"}),
});
export type Contact = z.infer<typeof Contact>

const MessageSettings = z.object({
    title: z.string().max(messageTitleMax),
    price: z.number().min(0, {message: "Price must be greater than 0"}),
    currency: z.string().refine( (val) => val in Object.keys(currencies), {message: "Invalid currency"})
});
export type MessageSettings = z.infer<typeof MessageSettings>




const Message = z.object({
    sender: z.string().email(),
    subject: z.string().max(messageSubjectMax),
    body: z.string().max(messageBodyMax),
    sentDate: z.date(),
    price: z.number().min(0, {message: "Price must be greater than 0"}),
    currency: z.string().refine( (val) => val in Object.keys(currencies), {message: "Invalid currency"}),
    isRead: z.boolean(),
    isPaid: z.boolean(),
});
export type Message = z.infer<typeof Message>

const PublicPageStats = z.object({
    views: z.number(),
    numberOfMessageAttempts: z.number(),
    numberOfFreeMessages: z.number(),
    numberOfPaidMessages: z.number(),
    referrers: z.array(z.string().url().array()),
    OSPlatforms: z.array(z.string().refine( (val) => val in platforms, {message: "Invalid platform"}).array()),
    countries: z.array(z.string().refine( (val) => val.length === 2, {message: "Invalid country"}).array()),
});
export type PublicPageStats = z.infer<typeof PublicPageStats>





const Theme = z.object({
    isCustom: z.boolean(),
    template: z.string().refine( (val) => val in themeTemplates, {message: "Invalid template"}),
});

export type Theme = z.infer<typeof Theme>;



