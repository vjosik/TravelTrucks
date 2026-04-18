"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast"; 
import { createBooking } from "../../lib/api";
import css from "./BookingForm.module.css";

interface IBookingFormData {
  name: string;
  email: string;
  date: Date | null;
  comment?: string;
}

const schema: yup.ObjectSchema<IBookingFormData> = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  date: yup
    .date()
    .nullable()
    .required("Booking date is required")
    .min(new Date(), "Booking date cannot be in the past"),
  comment: yup.string().optional(),
});

interface BookingFormProps {
  camperId: string;
}

export const BookingForm = ({ camperId }: BookingFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IBookingFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      date: null,
      comment: "",
    },
  });

  const onSubmit = async (data: IBookingFormData) => {
    try {
      await createBooking(camperId, {
        name: data.name,
        email: data.email,
      });

      
      toast.success("Success! Your booking has been sent.");
      reset();
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Failed to send booking. Please try again later.");
    }
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputsGroup}>
          <div className={css.fieldWrapper}>
            <input
              {...register("name")}
              placeholder="Name*"
              className={`${css.input} ${errors.name ? css.inputError : ""}`}
            />
            {errors.name && (
              <p className={css.errorText}>{errors.name.message}</p>
            )}
          </div>

          <div className={css.fieldWrapper}>
            <input
              {...register("email")}
              placeholder="Email*"
              className={`${css.input} ${errors.email ? css.inputError : ""}`}
            />
            {errors.email && (
              <p className={css.errorText}>{errors.email.message}</p>
            )}
          </div>

          <div className={css.fieldWrapper}>
            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <DatePicker
                  selected={field.value}
                  onChange={(date: Date | null) => field.onChange(date)}
                  placeholderText="Booking date*"
                  className={`${css.input} ${errors.date ? css.inputError : ""}`}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                />
              )}
            />
            {errors.date && (
              <p className={css.errorText}>{errors.date.message}</p>
            )}
          </div>

          <div className={css.fieldWrapper}>
            <textarea
              {...register("comment")}
              placeholder="Comment"
              className={css.textarea}
            />
          </div>
        </div>

        <button type="submit" className={css.submitBtn} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};