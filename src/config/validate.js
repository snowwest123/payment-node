import { validationResult } from "express-validator";
import express from "express";


// parallel processing process
const validate = (validations = []) => {
    return async (req, res, next) => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(500).json({
            message: errors.array()[0].msg,
            code: 500
        });
    };
};

export default validate;