import React, { useState } from 'react'
import { NextPage } from 'next';
import Image from 'next/image';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import type { ICheckout } from '@/components/Molecule/Checkout/CheckoutPage';
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    MenuItem,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from '@mui/material';


//images
import melatLogo from "../../../../public/logos/دانلود-رایگان-لوگو-آرم-بانک-ملت-ایران 1.png";
import zarinpalLogo from "../../../../public/logos/zarinpal-logo-min 1.png";
import samanLogo from "../../../../public/logos/jokmmpnlmlpk.png";



const CheckoutMobile: NextPage<ICheckout> = ({ lastPrice }) => {

    const [selectedValue, setSelectedValue] = useState<string>("");

    const initialValues = {
        fullName: '',
        province: '',
        address: '',
        phoneNumber: '',
        postalCode: '',
        description: '',
        discountCode: ''
    };

    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('نام و نام خانوادگی الزامی است'),
        province: Yup.string().required('استان الزامی است'),
        address: Yup.string().required('آدرس الزامی است'),
        phoneNumber: Yup.string().required('تلفن همراه گیرنده الزامی است'),
        postalCode: Yup.string().required('کدپستی الزامی است'),
        discountCode: Yup.string()
    });

    const handleSubmit = (values: any, actions: any) => {
        console.log(values);
        actions.setSubmitting(false);
    };


    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
    };

    const city = [
        {
            value: 'خراسان رضوی'
        },
        {
            value: 'بوشهر',
        },
        {
            value: 'فارس',
        },
        {
            value: 'تهران',
        },
    ];

    return (
        <>
            <Box my={10}>
                <Box display="flex" justifyContent="center" textAlign="center">
                    <Box>
                        <Box>
                            <Typography sx={{ color: "themeColor.main" }} fontWeight="bold" variant="h6">
                                مشخصات گیرنده
                            </Typography>
                        </Box>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <Box justifyContent="center">
                                        <Box m={2}>
                                            <Field name="fullName">
                                                {({ field, meta }: any) => (
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="نام و نام خانوادگی*"
                                                        variant="outlined"
                                                        {...field}
                                                        error={meta.touched && meta.error}
                                                        helperText={meta.touched && meta.error}
                                                    />
                                                )}
                                            </Field>
                                        </Box>
                                        <Box m={2} dir="rtl">
                                            <Field name="province">
                                                {({ field }: any) => (
                                                    <TextField
                                                        id="outlined-select-currency"
                                                        select
                                                        label="استان"
                                                        defaultValue="استان"
                                                        sx={{ dir: "rtl" }}
                                                        helperText="لطفا استان خود را انتخاب کنید"
                                                        variant="outlined"
                                                        {...field}
                                                    >
                                                        {city.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                                {option.value}
                                                            </MenuItem>
                                                        ))}
                                                    </TextField>
                                                )}
                                            </Field>
                                        </Box>
                                        <Box m={2}>
                                            <Field name="address">
                                                {({ field, meta }: any) => (
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="آدرس"
                                                        variant="outlined"
                                                        {...field}
                                                        error={meta.touched && meta.error}
                                                        helperText={meta.touched && meta.error}
                                                    />
                                                )}
                                            </Field>
                                        </Box>
                                        <Box m={2}>
                                            <Field name="phoneNumber">
                                                {({ field, meta }: any) => (
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="تلفن همراه گیرنده*"
                                                        variant="outlined"
                                                        {...field}
                                                        error={meta.touched && meta.error}
                                                        helperText={meta.touched && meta.error}
                                                    />
                                                )}
                                            </Field>
                                        </Box>
                                        <Box m={2}>
                                            <Field name="postalCode">
                                                {({ field, meta }: any) => (
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="کدپستی*"
                                                        variant="outlined"
                                                        {...field}
                                                        error={meta.touched && meta.error}
                                                        helperText={meta.touched && meta.error}
                                                    />
                                                )}
                                            </Field>
                                        </Box>
                                        <Box m={2}>
                                            <TextField id="outlined-basic" label="توضیحات" variant="outlined" name="description" />
                                        </Box>
                                    </Box>
                                    <Box textAlign="right" m="20px 50px">
                                        <Typography color="gray" fontWeight="bold" variant="body1">
                                            درصورت عدم دریافت بسته توسط گیرنده، بسته در نزدیک ترین اداره پست منطقه انبار خواهد شد
                                        </Typography>
                                    </Box>

                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Box>
                <Box textAlign="center">
                    <Typography color="gray" fontWeight="bold" variant="h5">
                        زمان ارسال:
                    </Typography>
                    <Typography color="error" fontWeight="bold" variant="h6">
                        1 روز کاری برای تهران
                    </Typography>
                    <Typography color="error" fontWeight="bold" variant="h6">
                        3 الی 5 روز کاری برای شهرستان ها
                    </Typography>
                    <Typography color="gray" fontWeight="bold" variant="body1">
                        درصورت عدم دریافت بسته توسط گیرنده، بسته در نزدیک ترین اداره پست منطقه انبار خواهد شد
                    </Typography>
                </Box>
                <Box textAlign="center">
                    <Typography sx={{ color: "themeColor.main", my: "20px" }} fontWeight="bold" variant="h5">
                        انتخاب روش پرداخت
                    </Typography>
                    <Typography sx={{ color: "themeColor.main", m: "0px" }} fontWeight="bold" variant="body1">
                        درگاه پرداخت:
                    </Typography>
                    <Box display="flex" justifyContent="center" flexWrap="wrap">
                        <FormControl component="fieldset">
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                value={selectedValue}
                                onChange={handleChange}
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label={<Image src={melatLogo} alt="Melat Logo" width={80} height={80} />}
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label={<Image src={samanLogo} alt="Saman Logo" width={80} height={80} />}
                                />
                                <FormControlLabel
                                    value="other"
                                    control={<Radio />}
                                    label={<Image src={zarinpalLogo} alt="Zarinpal Logo" width={80} height={80} />}
                                />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box my={5}>
                        <Box>
                            <TextField id="outlined-basics" label="کد تخفیف" variant="outlined" />
                        </Box>
                        <Box mx={3}>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "themeColor.secendary",
                                    m: "10px 0px",
                                    ":hover": { bgcolor: "themeColor.secendary" }
                                }}
                                onClick={() => alert("done. offer")}
                            >
                                <Typography color="white" m="5px 0px" fontWeight="bold" variant="body1">
                                    اعمال کد تخفیف
                                </Typography>
                            </Button>
                        </Box>
                        <Box textAlign="center">
                            <Typography color="gray" fontWeight="bold" variant="body1">
                                برای مشاهده کدهای تخفیف خود به داشبورد کاریری مراجعه کنید.
                            </Typography>
                        </Box>
                        <Box textAlign="center" mx="100px">
                            <Typography sx={{ m: "10px" }} color="gray" fontWeight="bold" variant="h6">
                                مبلغ قابل پرداخت:
                            </Typography>
                            <Typography sx={{ color: "themeColor.main", m: "10px" }} color="gray" fontWeight="bold" variant="h5">
                                {lastPrice} تومان
                            </Typography>
                            <Typography sx={{ mt: " 25px " }} color="gray" fontWeight="bold" variant="h6">
                                هزینه ارسال:
                            </Typography>
                            <Typography sx={{ color: "themeColor.main", m: "10px 0px" }} color="gray" fontWeight="bold" variant="h5">
                                رایگان
                            </Typography>
                            <Box display="flex" justifyContent="center">
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "themeColor.Primarhy",
                                        m: "20px 0px",
                                        boxShadow: 0,
                                        ":hover": { bgcolor: "themeColor.Primarhy" }
                                    }}
                                    onClick={() => alert("done.")}
                                >
                                    <Typography color="error" m="5px 0px" fontWeight="bold" variant="body1">
                                        تایید اطلاعات و پرداخت
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CheckoutMobile;