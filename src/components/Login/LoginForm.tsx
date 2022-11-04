import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FormEvent, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'

export const LoginForm = () => {
  const { t } = useTranslation();
  const [loading, setloading] = useState<boolean>(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setloading(true);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-froup p-1">
        <label htmlFor="username text-muted">
          <h6 className='text-grey'>
            <FontAwesomeIcon icon={faUser} />
            <Trans t={t}>login-username</Trans>
          </h6>
        </label>
      </div>
    </form>
  )
}