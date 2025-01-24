import express from "express"
import contactController from "../controller/contact-controller.js"

export const userApi = new express.Router()

userApi.post("/api/contact", contactController.contact)