import styled from 'styled-components';

const StyledCartProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
        cursor: pointer;
        position: relative;

        &:hover {
            .tooltip {
                opacity: 1;
            }
        }

        .tooltip {
            transition: 0.15s ease-in-out;
            opacity: 0;
            position: absolute;
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
            background: #000;
            color: #fff;
            min-width: 100px;
            padding: 5px;
            border-radius: 3px;
        }
    }

    .productImage {
        width: 78px;
        height: 78px;

        img {
            width: 100%;
            max-height: 100%;
        }
    }

    .productInfo {
        margin-left: 48px;
        display: flex;
        flex: 1 1 auto;

        .name {
            flex: 1 1 auto;
            margin-right: 16px;
        }

        .quantity {
            flex: 0 0 144px;

            // span {
            //     margin: 16px;
            // }

            .dropdown-container {
                width: 80px;
                position: relative;

                .dropdown-header,
                .dropdown-options {
                    cursor: pointer;
                    width: 100%;
                    border-radius: 3px;
                    border: 1px solid #000;
                    box-sizing: border-box;
                }

                .dropdown-header {
                    padding: 5px 10px;
                }

                .dropdown-options {
                    position: absolute;
                    background-color: #fff;
                    z-index: 1;
                    top: calc(100% + 10px);
                    box-sizing: border-box;
                    left: 0;
                    width: 80px;
                    border-radius: 3px;
                    border: 1px solid #000;
                    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

                    > div {
                        cursor: pointer;
                        padding: 10px;
                        &:hover {
                            background-color: #f2f2f2;
                        }
                    }
                }
            }
        }

        .price {
            flex: 0 0 auto;
            flex-basis: 100px;
            align-items: flex-end;

            &-old {
                text-decoration: line-through;
                color: red;
                margin-right: 10px;
            }
        }
    }
`;

export default StyledCartProduct;
