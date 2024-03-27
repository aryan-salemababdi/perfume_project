import React from 'react';
import { NextPage } from 'next';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import type { ICartPage } from '@/components/Molecule/CartPage/CartPage';
import { useRandomItem } from './useRandomItem';
import {
    Box,
    Button,
    Card,
    Container,
    Typography,
    Divider
} from '@mui/material';
import { HeaderCartPrice, VolumePerfumeBox } from './styled';

const Cart: NextPage<ICartPage> = ({ products, onPayment }) => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ["products"],
        queryFn: () =>
            fetch("https://fakestoreapi.com/products").then(res =>
                res.json()
            ),
        initialData: products
    });

    const onSubmitProduct = (cash: string, submit: boolean): void => {
        onPayment?.(cash, submit);
    }



    return (
        <>
            <Container sx={{ m: "30px 0px" }}>
                {/* This component must be added to the mobile version. (The mobile component is different.) */}
                <Box
                    display="flex"
                    justifyContent={{
                        xs: "center",
                        sm: "center",
                        md: "space-between"
                    }}
                    flexWrap="wrap"
                >
                    <Box>
                        {
                            !isLoading ?
                                (
                                    data.map((product: any, index: number) => {
                                        return (
                                            <>
                                                <Box display="flex" m="10px 0px" key={product.id} >
                                                    <Box display="flex" justifyContent={{ md: "start", sm: "center", xs: "center" }} flexWrap="wrap">
                                                        <Card sx={{
                                                            boxShadow: 0,
                                                            border: "1px solid #CBCECE",
                                                            width: "200px",
                                                            height: "200px",
                                                            textAlign: "center",
                                                            p: "20px",
                                                            borderRadius: "12px"
                                                        }}
                                                        >
                                                            <Image
                                                                height="194"
                                                                width="194"
                                                                src={product.image}
                                                                alt={`product image ${product.id}`}
                                                            />
                                                        </Card>
                                                    </Box>
                                                    <Box m="0px 25px" textAlign={{ md: "right", sm: "center", xs: "center" }}>
                                                        <Typography maxWidth="300px" color="CaptionText" fontWeight="bold" variant="h6">
                                                            {product.title}
                                                        </Typography>
                                                        <Typography color="GrayText" fontWeight="bold" variant="h6" sx={{ m: "15px 0px" }}>
                                                            {product.category}
                                                        </Typography>
                                                        <Box
                                                            display="flex"
                                                            m="15px 0px"
                                                            justifyContent={
                                                                {
                                                                    md: "start",
                                                                    sm: "center",
                                                                    xs: "center"
                                                                }
                                                            }>
                                                            <Typography color="GrayText">
                                                                حجم خریداری شده:
                                                            </Typography>
                                                            <VolumePerfumeBox sx={{ margin: "0px 10px", padding: "0px 20px" }}>
                                                                <Typography fontWeight="bold">
                                                                    {product.rating.count} میل
                                                                </Typography>
                                                            </VolumePerfumeBox>
                                                        </Box>
                                                        <Box
                                                            display="flex"
                                                            m="15px 0px"
                                                            justifyContent={
                                                                {
                                                                    md: "start",
                                                                    sm: "center",
                                                                    xs: "center"
                                                                }
                                                            }>
                                                            <Typography sx={{ color: "themeColor.main" }} fontWeight="bold" variant="h5">
                                                                {product.price}
                                                            </Typography>
                                                            <Typography sx={{ m: "0px 30px" }} color="GrayText" fontWeight="bold" variant="h6">
                                                                ارسال رایگان
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                {
                                                    (index < data.length - 1) ? (
                                                        <Box display="flex" justifyContent={{md:"start", sm:"center", xs:"center"}} m="20px 0px">
                                                            <Divider sx={
                                                                {
                                                                    width: "90%",
                                                                    bgcolor: "themeColor.navy"
                                                                }
                                                            } />
                                                        </Box>
                                                    )
                                                        :
                                                        ""
                                                }
                                            </>
                                        )
                                    })
                                )
                                :
                                "loading"
                        }
                    </Box>
                    <Box textAlign="center">
                        <Box display="flex" justifyContent="center">
                            <Card sx={{ width: "300px", boxShadow: 5 }}>
                                <HeaderCartPrice>
                                    <Typography fontWeight="bold" variant="h6">
                                        فاکتور شما
                                    </Typography>
                                </HeaderCartPrice>
                                <Box textAlign="center" m="20px">
                                    <Box>
                                        <Typography color="GrayText">
                                            مجموع تخفیف:
                                        </Typography>
                                        <Typography color="error" m="5px 0px" fontWeight="bold" variant="h6">
                                            1/000/000 تومان
                                        </Typography>
                                    </Box>
                                    <Box marginTop="40px" marginBottom="20px">
                                        <Typography color="GrayText">
                                            مبلغ قابل پرداخت:
                                        </Typography>
                                        <Typography sx={{ color: "themeColor.main" }} m="5px 0px" fontWeight="bold" variant="h5">
                                            12/000/000 تومان
                                        </Typography>
                                    </Box>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "themeColor.Primarhy",
                                            ":hover": { bgcolor: "themeColor.Primarhy" }
                                        }}
                                        fullWidth
                                        onClick={() => onSubmitProduct("300", true)}
                                    >
                                        <Typography sx={{ color: "themeColor.main" }} m="5px 0px" fontWeight="bold" variant="body1">
                                            تایید سفارشات
                                        </Typography>
                                    </Button>
                                </Box>
                            </Card>
                        </Box>
                        <Box width={{ md: "300px", sm: "300px" }}>
                            <Typography sx={{ color: "themeColor.main" }} m="40px 0px" fontWeight="bold" variant="h6">
                                ارسال رایگان به تمام کشور
                            </Typography>
                            <Typography color="GrayText" m="40px 0px" fontWeight="bold" variant="h6">
                                هزینه سبد هنوز پرداخت نشده و در صورت اتمام موجودی از سبد حذف خواهد شد.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Cart;
