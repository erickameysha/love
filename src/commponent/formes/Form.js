import React, {useState} from 'react';
import {joiResolver, useForm} from "@mantine/form";
import Joi from "joi";
import {Box, Button} from "@mui/material";
import {Group, PasswordInput, TextInput} from "@mantine/core";

const schema = Joi.object({
    name: Joi.string().min(2).message('Name should have at least 2 letters'),
    email: Joi.string()
        .email({tlds: {allow: false}})
        .message('Invalid email'),
    password: Joi.string()
});
const Form = ({title, handleClick}) => {

    const form = useForm({
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length < 6 ? 'Name must have at least 6 letters' : null),
            // phone: (value)=> (/\+375\(\d{3}\)\d{3}-\d{2}-\d{2}/.test(value))?  'Invalid number': null)
        },
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',

        },
    });
    return (
        <Box>
            <form onSubmit={form.onSubmit(values => console.log(values))}>
                <TextInput
                    withAsterisk
                    label="name"
                    placeholder="Имя"
                    {...form.getInputProps('name')}
                />
                <TextInput
                    withAsterisk
                    label="Фамилия"
                    placeholder="Фамилия"
                    {...form.getInputProps('lastName')}
                />

                <PasswordInput
                    label={'Password'}
                    placeholder={'Пароль'}
                    {...form.getInputProps('password')}
                />
                <TextInput
                    withAsterisk
                    label="Email"
                    placeholder="example@mail.com"
                    {...form.getInputProps('email')}
                />

                <Group position="right" mt="xl">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    )
}

export default Form