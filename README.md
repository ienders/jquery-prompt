jQuery Prompt plugin
========================

A jQuery plugin to give text fields prompts. When the field is empty, it will display the prompt value. When the user blurs
into it, it will remove the prompt and allow them to type in their input. This solution does not use CSS, and as such, will
submit the prompt value on submit (so your app should probably be written to ignore the prompt value).

Usage
-----

Include jquery.prompt.js file.

        $(function() {
            $('.my-form-field').prompt('Enter your value here');
        });
