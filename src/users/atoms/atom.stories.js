import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import StoryRouter from "storybook-react-router";
import Icon from "./icon";
import Loader from "./loader";
import React from "react";
import Image from "./image";
import Links from "./link";
import Button from "./joinButton";
import UserIcon from "./usericon";
import ActionStatement from './actionStatement';
import InputField from "./inputField";
import SocialLogin from "./socialLogin";
import {FaUser} from 'react-icons/fa';
import InputIcon from './inputIcon';
import ActionButton from './actionButton';
import SubActionStatement from './subActionStatement';

storiesOf("Splash_Screen|Atoms", module)
  // eslint-disable-next-line react/react-in-jsx-scope
  .add("loading", () => <Loader loading={true} />);
storiesOf("Landing_Page|Atoms", module)
  .addDecorator(StoryRouter())
  .add("lifted", () => <Icon onClick={action("clicked")} />)
  .add("gyming", () => <Image />)
  .add("discover", () => <Links value={"Discover"} />)
  .add("sign in", () => <Links value={"Sign in"} />)
  .add("join now", () => <Button />);
storiesOf("Sign_Up_In|Atoms", module)
.addDecorator(StoryRouter())
.add('userIcon',() => <UserIcon />)
.add('Register',()=><ActionStatement statement={'Register on Lifted'}/> )
.add('Login',()=><ActionStatement statement={'Login on Lifted'}/> )
.add('Reset',()=><ActionStatement statement={'Reset Password'}/> )
.add('Email',()=><InputField name={'Email'} type={'text'}/>)
.add('Gmail', ()=><SocialLogin name={'Connect with Gmail'}/>)
.add('Facebook', ()=><SocialLogin name={'Connect with Facebook'}/>)
.add('Username',()=><InputField name={'Username'} type={'text'}/>)
.add('Password',()=><InputField name={'Password'} type={'password'}/>)
.add('Confirm Password',()=><InputField name={'Confirm Password'} type={'password'}/>)
.add("inputIcon",()=><InputIcon name={<FaUser/>}/>)
.add('Register Button', ()=><ActionButton  action={'Register'} />)
.add('Login Button', ()=><ActionButton  action={'Login'} />)
.add('Reset Button', ()=><ActionButton  action={'Reset'} />)
.add('Forgot password',()=><SubActionStatement link={'reset'} value={'forgot password?'} />)
.add('Already Lifting',()=><SubActionStatement statement={'Already Lifting?'} link={'login'} value={'Login'} />)