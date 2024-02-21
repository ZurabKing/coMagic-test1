import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

interface iFormInput {
  firstName: string;
  lastName: string;
  age: number;
  password: string;
}

export const Auth: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormInput>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<iFormInput> = (data) => {
    const { firstName, lastName, age, password } = data;
    console.log(data);

    alert(
      `Данные: имя:${firstName}, фамилия:${lastName}, возраст:${age}, пароль:${password}`
    );

    navigate("/");
  };

  return (
    <div className={styles.form_auth_block}>
      <div className={styles.form_auth_block_content}>
        <h1 className={styles.form_auth_block_head_text}>Авторизация</h1>
      </div>

      <form
        className={styles.form_auth_style}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.errors_block}>
          <input
            {...register("firstName", { required: true })}
            aria-invalid={errors.firstName ? "true" : "false"}
            type="text"
            placeholder="Введите Ваше имя"
          />
          {errors.firstName?.type === "required" && (
            <span role="alert">First name is not valid</span>
          )}
        </div>

        <div className={styles.errors_block}>
          <input
            {...register("lastName", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            aria-invalid={errors.lastName ? "true" : "false"}
            type="text"
            placeholder="Введите Вашу фамилию"
          />
          {errors.lastName && <span role="alert">Last name is not valid</span>}
        </div>

        <div className={styles.errors_block}>
          <input
            {...register("age", { min: 18, max: 99 })}
            type="number"
            placeholder="Введите Ваш возраст"
          />
          {errors.age?.type === "required" && (
            <span role="alert">age is not valid</span>
          )}
        </div>

        <div className={styles.errors_block}>
          <input
            {...register("password", { required: true, minLength: 6 })}
            type="password"
            placeholder="Введите пароль"
          />
          {errors.password?.type === "required" && (
            <span role="alert">password is not valid</span>
          )}
        </div>

        <button
          className={styles.form_auth_button}
          type="submit"
          name="form_auth_submit"
        >
          Войти
        </button>
      </form>
    </div>
  );
};
