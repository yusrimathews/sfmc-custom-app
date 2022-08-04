import React from 'react';
import { useAuth } from '../auth';
import Icon from '@salesforce/design-system-react/components/icon';
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import PageHeader from '@salesforce/design-system-react/components/page-header';

function Route() {
  const auth = useAuth();

  return (
    <div className="slds-p-around--small slds-brand-band slds-brand-band_large">
      <div className="slds-grid">
        <div className="slds-col">
          <IconSettings iconPath="/assets/icons">
            <PageHeader
              icon={
                <Icon
                  category="standard"
                  name="default"
                  style={{
                    backgroundColor: "#ea7600",
                    fill: "#ffffff"
                  }}
                  title="Custom App"
                />
              }
              title={ auth.state.object?.organization?.enterprise_name + ' | ' + auth.state.object?.organization?.enterprise_id }
              trail={[<span>Custom App</span>]}
              truncate
              variant="object-home"
            />
          </IconSettings>

          <div className="slds-card slds-m-top_small slds-p-vertical_small slds-p-horizontal_medium">
            Logged in as { auth.state.object?.user?.preferred_username }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Route;
