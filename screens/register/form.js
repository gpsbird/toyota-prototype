import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { StyleSheet, Text } from 'react-native'
import { required, maxLength, number, email } from '../utils/form-rules'
import {
    Text as SText,
    View,
    Button,
    TextInput
} from '@shoutem/ui';


const styles = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 9,
        marginLeft: 15
    },
    warning: {
        color: '#e1bf03',
        fontSize: 9,
        marginLeft: 15
    }
});

const renderField = ({ input, label, secure, type, meta: { touched, error, warning } }) => (
    <View styleName="vertical">
        <TextInput
            placeholder={label}
            secureTextEntry={secure}
            onChangeText={input.onChange}
            onBlur={input.onBlur}
            onFocus={input.onFocus}
            value={input.value}
        />
        {touched && ((error && <Text style={styles.error} >{error}</Text>) || (warning && <Text style={styles.warning} >{warning}</Text>))}
    </View>
);



const Form = (props) => {

    const { handleSubmit } = props

    return (
        <View>

            <Field name="name"
                component={renderField} label="Full name"
                validate={[required, maxLength(15)]}
            />
            <Field name="username"
                component={renderField} label="Username"
                validate={[required, maxLength(10)]}
            />
            <Field name="phone"
                component={renderField} label="Phone"
                validate={[required, number]}
            />
            <Field name="email"
                component={renderField} label="Email"
                validate={email}
            />

            <Field name="password" secure={true}
                component={renderField} label="Password"
            />

            <View styleName="horizontal">
                <Button styleName="confirmation secondary" onPress={handleSubmit} ><SText>Register</SText></Button>
            </View>

        </View>
    )
}

export default reduxForm({
    form: 'fieldLevelValidation' // a unique identifier for this form
})(Form)