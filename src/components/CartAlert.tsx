import { Alert, AlertIcon } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

interface Alerts {
    id: number;
    result: string;
}

interface Props {
    alerts: Alerts[];
}

const MotionAlert = motion(Alert);

const CartAlert = ({ alerts }: Props) => {
    return (
        <AnimatePresence>
            {alerts.map(
                (alert) =>
                    alert.result && (
                        <MotionAlert
                            key={alert.id}
                            status="success"
                            variant="left-accent"
                            position="fixed"
                            top={20}
                            right={1}
                            width="fit-content"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <AlertIcon />
                            {alert.result}
                        </MotionAlert>
                    )
            )}
        </AnimatePresence>
    );
};

export default CartAlert;
